### U05-CW01 - Text Formatting Basics

**Objective:**  
Students will apply text formatting basics to enhance the visual presentation of the "Russian Tortoises" website using CSS. They will also learn to write comments to keep their CSS organized and readable.

---

1. **Setup Your Project**

   - Make sure that you have created a `unit5` folder inside of your `PWD` folder.
   - Inside of the `unit5` folder, create the `cw` and `hw` folders.
   - Download and then drag and drop the `u05-cw01` zip file inside of the `cw` folder and unzip.
   - Open the `u05-cw01` folder in your VSCode text editor.
   - Inside of VSCode, create a new CSS file named `styles.css`.
   - Link the `styles.css` file to both HTML pages using a `<link>` tag in the `<head>` section. Example:
     ```html
     <link rel="stylesheet" href="styles.css" />
     ```

2. **Apply Global Text Styling**

   - Add a comment `/* Global Styles */` at the top of the `styles.css` file.
   - Underneath the comment, select the `<body>` tag and set the base font family (`Arial, sans-serif`) and color (`#333333`) for the entire website.

3. **Style the Header Text**

   - Add a comment `/* Header Styles */` for the `<header>`.
   - Underneath the comment, select the `<header>` tag and set the text color to white.

4. **Format Headings**

   - Add a comment `/* Heading Styles */` for headings.
   - Underneath the comment, for `<h1>` and `<h2>`:
     - Use bold font weight.
     - Apply colors: dark green (`#006400`) for `<h1>` and navy blue (`#000080`) for `<h2>`.

5. **Style Paragraph Text**

   - Add a comment `/* Paragraph Styles */` for the paragraph.
   - Underneath the comment, select all `<p>` tags and set the text to the global color (`#333333`).

6. **Enhance Links with Styling**

   - Add a comment `/* Link Styles */` for the link styles.
   - Underneath the comment, select all `<a>` elements:
     - Set the link color to teal (`#008080`).
     - Set the font-style to normal.
     - Change the link color to dark green (`#006400`) when hovered.

7. **Style the Aside Section**

   - Add a comment `/* Aside Styles */` for the aside styles.
   - Underneath the comment, select the `<aside>` tag and set the text to the global color (`#333333`).
   - Select the `<h3>` heading inside the `<aside>`:
     - Use bold font weight.
     - Set the color to dark green (`#006400`).

   Example:

   ```css
   aside h3 {
     font-weight: bold;
     color: #006400;
   }
   ```

8. **Style the Footer Text**

   - Add a comment `/* Footer Styles */` for the footer styles.
   - Underneath the comment, select the footer to set the text color to white.

9. **Test Your Changes**

   - Open both `index.html` and `care.html` in Google Chrome to verify the updated text formatting and organization.
   - Ensure all sections are styled consistently.
   - Use the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to ensure your CSS is valid.

10. **Submit Your Work**
    - Once you've confirmed that styling looks good, submit the following:
    - Submit your `styles.css` file inside of Google Classroom.
