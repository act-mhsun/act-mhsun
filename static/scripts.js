async function sendCommand(command) {
    const output = document.getElementById("output");
    output.textContent = "Sending command...";

    try {
        const response = await fetch("/send_command", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ command }),
        });
        const data = await response.json();
        output.textContent = data.response;
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
}

async function check4GStatus() {
    const output = document.getElementById("4gOutput");
    output.textContent = "Checking 4G status...";

    try {
        const response = await fetch("/check_4g_status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        output.textContent = data.response;
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
}

function sendCustomCommand() {
    const customCommand = document.getElementById("customCommand").value.trim();
    if (customCommand) {
        sendCommand(customCommand);
    } else {
        alert("Please enter a valid AT command.");
    }
}
