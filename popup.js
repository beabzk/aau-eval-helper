document.getElementById("btn-high").addEventListener("click", () => injectScript("high"));
document.getElementById("btn-random").addEventListener("click", () => injectScript("random"));
document.getElementById("btn-low").addEventListener("click", () => injectScript("low"));

async function injectScript(mode) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: fillForm,
        args: [mode]
    });
}

function fillForm(mode) {
    // 1. Find the table based on the ID in your HTML
    const table = document.getElementById("evaluationTable");

    if (!table) {
        alert("Table not found. Please select Year/Semester/Course/Instructor first.");
        return;
    }

    // 2. Get all rows
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach((row) => {
        const radios = row.querySelectorAll('input[type="radio"]');

        // Your table has 6 options: [0]VL, [1]L, [2]A, [3]H, [4]VH, [5]NA
        if (radios.length === 6) {

            let indexToClick = 0;

            if (mode === 'high') {
                // Logic: Randomly pick index 3 (H) or 4 (VH)
                // Math.random() * 2 gives 0 or 1. 
                // We add 3 to make it 3 or 4.
                indexToClick = Math.floor(Math.random() * 2) + 3;
            }
            else if (mode === 'low') {
                // Logic: Randomly pick index 0 (VL) or 1 (L)
                indexToClick = Math.floor(Math.random() * 2);
            }
            else if (mode === 'random') {
                // Logic: Randomly pick index 0 (VL) through 4 (VH)
                // We exclude index 5 (NA)
                indexToClick = Math.floor(Math.random() * 5);
            }

            // Perform the click
            radios[indexToClick].click();
        }
    });

    // 3. Fill Comments
    const strengthBox = document.getElementById("GeneralComment");
    const suggestBox = document.getElementById("SuggestedPoints");

    if (strengthBox && suggestBox) {
        if (mode === 'high') {
            strengthBox.value = "The instructor explains concepts clearly and is punctual.";
            suggestBox.value = "Keep up the good work.";
        } else if (mode === 'low') {
            strengthBox.value = "N/A";
            suggestBox.value = "Needs to be more prepared for class.";
        } else {
            strengthBox.value = "Satisfactory.";
            suggestBox.value = "None.";
        }
    }
}