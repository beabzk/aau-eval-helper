# AAU Student Evaluation Auto-Filler

A Chromium browser extension to automate the mandatory Student Staff Evaluation process at **Addis Ababa University**.

Tired of manually clicking hundreds of radio buttons every semester? This extension detects the evaluation table and fills it out instantly based on your preferred rating strategy.

## 🚀 Features

*   **Rate High:** Randomly selects between **High (H)** and **Very High (VH)**.
*   **Rate Random:** Randomly selects anything from **Very Low (VL)** to **Very High (VH)**.
*   **Rate Low:** Randomly selects between **Very Low (VL)** and **Low (L)**.
*   **Smart Safety:** Automatically skips "Not Applicable" (NA) to ensure valid entries.
*   **Auto-Comments:** Fills the "Strengths" and "Suggested Points" text boxes with context-appropriate generic text so you don't have to type.

## 🛠️ Installation

Since this extension is for a specific use case, it is not on the Chrome Web Store. You can install it manually in Developer Mode.

1.  **Clone or Download** this repository:
    ```bash
    git clone https://github.com/beabzk/aau-eval-helper.git
    ```
    *(Or download the ZIP and extract it to a folder).*

2.  Open your browser (Chrome, Edge, Brave, etc.) and navigate to:
    `chrome://extensions`

3.  Toggle **Developer mode** in the top right corner.

4.  Click the **Load unpacked** button in the top left.

5.  Select the folder where you downloaded this code (`aau-eval-helper`).

## 📖 How to Use

1.  Log in to the **AAU Student Portal**.
2.  Navigate to **Staff Evaluation**.
3.  **Important:** Select the Academic Year, Semester, Course, and Instructor from the dropdowns so the **evaluation grid is visible** on the screen.
4.  Click the **Extension Icon** (🧩) in your browser toolbar.
5.  Choose your rating:
    *   **High (H or VH)**
    *   **Random (VL to VH)**
    *   **Low (VL or L)**
6.  Review the filled form and click the **Save** button on the webpage manually.

## ⚠️ Disclaimer

This tool is for educational purposes and convenience.
*   Please use this responsibly.
*   The author is not responsible for any ratings submitted unintentionally.
*   Always review the form before clicking "Save" to ensure the rating reflects your intention (or at least ensures you aren't failing a good instructor!).

## 🤝 Contributing

Pull requests are welcome.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)