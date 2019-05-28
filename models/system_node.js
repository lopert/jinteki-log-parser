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
