var CLICK_TEXT = "[click]"
var CREDIT_TEXT = "[credit]"

var NODE_TYPES = {
    END_OF_TURN: "END_OF_TURN"
}

// main
function always_be_running() {
    // get the system logs
    system_log_nodes = document.getElementsByClassName("system");
    size = system_log_nodes.length

    // iterate through nodes backwards
    for (index = size-1;index >= 0; index--) {

        node = system_log_nodes[index]
        system_node = new SystemNode(node)

        node_type = process_node(node)

    }
}

always_be_running();

//chrome.runtime.sendMessage(system_log_nodes[size-1].innerText);