const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzO-h1Tts5WjutQZBQM43u1cGgWft3rJab3dzuF_WXLw6xjys9a79WBwxe_raNSlUZgJQ/exec';

interface FeedbackData {
    rating: number;
    name?: string;
    email?: string;
    feedback?: string;
}

/**
 * Sends feedback data to a Google Sheet via a Google Apps Script webhook.
 * This function is designed to be "fire-and-forget" to not block the UI.
 * It logs errors to the console.
 */
export const saveFeedbackToSheet = async (data: FeedbackData): Promise<void> => {
    const payload = {
        rating: data.rating,
        name: data.name || '',
        email: data.email || '',
        feedback: data.feedback || '',
    };

    try {
        // This fetch request sends the data to the Google Apps Script.
        // The Content-Type is set to 'text/plain' to prevent the browser from sending a CORS preflight (OPTIONS) request,
        // which is a common source of "Network error" when interacting with Google Apps Scripts from a web app.
        // The script can still parse the JSON string from the request body.
        await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(payload),
        });
        console.log('Feedback submission sent to Google Sheet:', payload);
    } catch (error) {
        // This will catch network errors. CORS errors may also appear in the console.
        console.error('Error submitting feedback to Google Sheet:', error);
    }
};