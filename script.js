document.getElementById('generate-btn').addEventListener('click', function() {
    const task = document.getElementById('task').value;
    const subject = document.getElementById('subject').value || "Module";
    const notes = document.getElementById('notes').value;

    let generatedPrompt = "";

    if (task === "summary") {
        generatedPrompt = `I am an IT student studying ${subject}. Please summarize the following content into simple, clear bullet points focusing on core concepts:\n\n${notes}`;
    } else if (task === "quiz") {
        generatedPrompt = `Act as an exam tutor for ${subject}. Create a 5-question multiple choice quiz based on these notes with answers at the end:\n\n${notes}`;
    } else if (task === "code") {
        generatedPrompt = `I am learning programming in ${subject}. Explain the following code/concept step-by-step using a beginner-friendly analogy:\n\n${notes}`;
    }

    document.getElementById('output-prompt').value = generatedPrompt;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-prompt');
    outputText.select();
    navigator.clipboard.writeText(outputText.value);
    alert("Prompt copied to clipboard!");
});
