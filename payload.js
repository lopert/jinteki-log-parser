
// get the system logs
system_log_nodes = document.getElementsByClassName("system");
size = system_log_nodes.length

for (index = size-1;index >= 0; index--) { 

    text = system_log_nodes[index].innerText;

    // log credit totals
    if (text.includes("is ending their turn")) {
        parse_end_of_turn_node(system_log_nodes[index])
    }
}

function parse_end_of_turn_node(node) {

    username = ""
    event = ""
    final_credit_total = ""

    html = node.innerHTML
    //szutek is ending their turn 15 with 4 <span class="anr-icon credit"></span> and 0 cards in their Grip.<hr>

    username = html.split(" is ending their turn ")[0]
    credits = html.split(" <span class=\"anr-icon credit\"></span>")[0].split(" with ")[1]
    turn = html.split(" turn ")[1].split(" with ")[0]
    
    console.log("Turn: " + turn + " // " + username + " // Credits: " + credits)
}

//chrome.runtime.sendMessage(system_log_nodes[size-1].innerText);