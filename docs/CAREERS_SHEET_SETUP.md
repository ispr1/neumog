# Neumog Careers - Google Sheet Integration Guide

This guide explains how to set up and manage the Google Sheet for the Neumog careers page.

## 1. Sheet Configuration

*   **Sheet Name:** Neumog Careers Database
*   **Sheet ID:** `15vxBOUOHeJHtIYLSRS4_eXtl1__hV_lxtWgvIl4XuVY`
*   **Access:** Shared with the Service Account email (from `.env`).

## 2. Tab Structure

The sheet contains **5 specific tabs** for different experience levels:
1.  `Freshers`
2.  `0-2 Years`
3.  `2-4 Years`
4.  `5+ Years`
5.  `8+ Years`

## 3. Column Data Map

Columns strictly map to the website as follows:

| Col | Field | Notes |
| :--- | :--- | :--- |
| **A** | `Date` | "YYYY-MM-DD" formatted date (e.g., `2025-12-31`). Displayed as "Posted on...". |
| **B** | `ID` | **Unique Slug**. System generates formats like `NDC01`. Must be unique. |
| **C** | `Title` | Job Title (e.g., "Senior Engineer"). |
| **D** | `Dept` | Department (Engineering, Design, etc.). |
| **E** | `Location`| E.g., "Remote", "London", "New York". |
| **F** | `Type` | E.g., "Full-time", "Contract". |
| **G** | `Exp` | E.g., "5+ Years". |
| **H** | `Short` | 1-sentence summary for the card view. |
| **I** | `Desc` | Full Job Description. |
| **J** | `Respon`| Bullet points. **Use Alt+Enter for new lines.** |
| **K** | `Reqs` | Bullet points. **Use Alt+Enter for new lines.** |
| **L** | `Benefits`| Bullet points. **Use Alt+Enter for new lines.** |
| **M** | `Status` | **Control Visibility**. Dropdown options below. |

## 4. Managing Job Visibility (Status Column)

The **Status (Column M)** controls whether a job appears on the website. This allows HR to manage the pipeline without deleting data.

*   🟢 **Active**: The job is **LIVE** and visible on the website.
*   🔴 **Closed**: The job is **HIDDEN** from the website. (Use this when the position is filled).
*   ⚫ **On Hold**: The job is **HIDDEN** from the website. (Use this for pausing hiring).

**To update:** Simply select the status from the dropdown menu in the Google Sheet. The website updates automatically (within 60 seconds).

## 5. Troubleshooting

*   **Job not appearing?**
    *   Check if **Status** (Col M) is exactly `Active`.
    *   Check if you are editing the correct Tab.
*   **Formatting issues?**
    *   If bullet points look like one long paragraph, ensure you used **Alt+Enter** (or Ctrl+Enter on Mac) inside the cell on Google Sheets to create real line breaks.
