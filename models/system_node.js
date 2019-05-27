SystemNode = class {

    constructor (node) {
        this.node = node
        this.text = parse_node_for_text(this.node)
        this.user = this.determine_user()
        this.type = this.determine_type()
        //console.log("New SystemNode with user: " + this.user)

    }

    determine_type() {
        if (this.text.includes("started their turn")) {
            //console.log("start turn for " + this.user + " was detected.")
            return "START"
        }
        else if (this.text.includes("ending their turn")) {
            //console.log("end turn for " + this.user + " was detected.")
            return "END"
        } 
    }

    determine_user() {
        return this.node.innerHTML.split(" ")[0]
    }

}

function parse_node_for_text(node) {
    html = node.innerHTML
    text = replace_log_icons(html)
    return text
}

function replace_log_icons(html) {
    text = html.replace("<span class=\"anr-icon click\"></span>", CLICK_TEXT)
    text = text.replace("<span class=\"anr-icon credit\"></span>", CREDIT_TEXT)

    return text
}

function process_node(node) {
    node_text = parse_node_for_text (node)

    if (node_text.includes("started their turn")) {
        return parse_start_of_turn_node(node_text)
    }
    // else if (node_text.includes("is ending their turn")) {
    //     return parse_end_of_turn_node(node_text)
    // }

    return null
}

function parse_start_of_turn_node(node_text) {

    username = node_text.split(" started their turn ")[0]
    turn = node_text.split(" turn ")[1].split(" with ")[0]
    credits = node_text.split(" " + CREDIT_TEXT)[0].split(" with ")[1]
    cards = node_text.split(" " + CREDIT_TEXT + " and ")[1].split(" cards in")[0]
    
    //console.log(">>>> " + username + " is starting turn: " + turn + " // credits: " + credits + " // cards: " + cards)

    return {
        "username": username,
        "turn" : turn,
        "credits" : credits,
        "cards" : cards,
        "type" : "start"
    }
    
}

function parse_end_of_turn_node(node_text) {

    username = node_text.split(" is ending their turn ")[0]
    turn = node_text.split(" turn ")[1].split(" with ")[0]
    credits = node_text.split(" " + CREDIT_TEXT)[0].split(" with ")[1]
    cards = node_text.split(" " + CREDIT_TEXT + " and ")[1].split(" cards in")[0]
    
    //console.log("<<<< " + username + " is ending turn: " + turn + " // credits: " + credits + " // cards: " + cards)

    return {
        "username": username,
        "turn" : turn,
        "credits" : credits,
        "cards" : cards,
        "type" : "end"
    }
}

function abc () {}