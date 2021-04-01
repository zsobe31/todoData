// console.log("model");

var Model = (function() {
    var self = {
        Insert: function(title, description) {
            list.push({
                index: list.length,
                title: title,
                description: description,
                done: false
            });
            SaveData();
        },
        GetAll: function() {
            var result = [];

            for (var i in list) {
                if (!list[i].done) {
                    result.push(list[i]);
                }
            }
            return result;
        },
        SetDone: function(index) {
            list[index].done = true;
            SaveData();
        }
    };

    var list = [];

    function LoadData() {
        // console.log("LoadData");
        var data = localStorage.getItem("todoData");
        if (data) {
            list = JSON.parse(data);
        }
    }

    function SaveData() {
        // console.log("SaveData");
        localStorage.setItem("todoData", JSON.stringify(list));
    }

    LoadData();

    return self;
})();