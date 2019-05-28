function parse_nodes(nodes) {
    console.log("Starting node parse...")

    console.log(nodes)

    var players = [nodes[0].username,nodes[1].username]

    console.log("Corp player:" + players[0]);
    console.log("Runner player:" + players[1]);

        // // convert nodes to data points
    // graph_data = []

    // for (index = 0; index < node_data.length; index++) {
    //     if (node_data[index]["username"] == "lopert") {
    //         graph_data.push(node_data[index]["credits"])
    //     }
    // }
    // console.log(graph_data)

    // chrome.runtime.sendMessage(graph_data);

    corp_credit_dataset = []
    runner_credit_dataset = []

    game_data = [corp_credit_dataset, runner_credit_dataset]

    for (index = 0; index < nodes.length; index++) {
        
        if (nodes[index].type != "unknown") {
            console.log(nodes[index])
            if (nodes[index].username == players[0]) {
                corp_credit_dataset.push(nodes[index].credits)
            }
            else if (nodes[index].username == players[1]) {
                runner_credit_dataset.push(nodes[index].credits)
            }
        }
    }

    console.log
    generate_chart(game_data);

}