const CLICK_TEXT = "[click]"
const CREDIT_TEXT = "[credit]"

// main
function always_be_running() {
    // get the system logs
    system_log_nodes = document.getElementsByClassName("system");
    size = system_log_nodes.length

    // iterate through nodes backwards
    for (index = size-1;index >= 0; index--) { 

        node = system_log_nodes[index]
        process_node(node)

    }
}

function process_node(node) {
    node_text = parse_node_for_text (node)

    if (node_text.includes("started their turn")) {
        parse_start_of_turn_node(node_text)
    }
    else if (node_text.includes("is ending their turn")) {
        parse_end_of_turn_node(node_text)
    }
}

function parse_start_of_turn_node(node_text) {

    username = node_text.split(" started their turn ")[0]
    turn = node_text.split(" turn ")[1].split(" with ")[0]
    credits = node_text.split(" " + CREDIT_TEXT)[0].split(" with ")[1]
    cards = node_text.split(" " + CREDIT_TEXT + " and ")[1].split(" cards in")[0]
    
    console.log(">>>> " + username + " is starting turn: " + turn + " // credits: " + credits + " // cards: " + cards)
    
}

function parse_end_of_turn_node(node_text) {

    username = node_text.split(" is ending their turn ")[0]
    turn = node_text.split(" turn ")[1].split(" with ")[0]
    credits = node_text.split(" " + CREDIT_TEXT)[0].split(" with ")[1]
    cards = node_text.split(" " + CREDIT_TEXT + " and ")[1].split(" cards in")[0]
    
    console.log("<<<< " + username + " is ending turn: " + turn + " // credits: " + credits + " // cards: " + cards)
}

function replace_log_icons(html) {
    text = html.replace("<span class=\"anr-icon click\"></span>", CLICK_TEXT)
    text = text.replace("<span class=\"anr-icon credit\"></span>", CREDIT_TEXT)

    return text
}

function parse_node_for_text(node) {
    html = node.innerHTML
    text = replace_log_icons(html)
    return text
}

always_be_running();

//chrome.runtime.sendMessage(system_log_nodes[size-1].innerText);