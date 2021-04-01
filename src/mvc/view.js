// console.log("view");

/* var View = {
    ShowInputSection: function() {
        collectionSection.style.display = "none";
        inputSection.style.display = "block";
    },
    ShowCollectionSection: function() {
        inputSection.style.display = "none";
        collectionSection.style.display = "block";
    }
};

var collectionSection = document.querySelector(".collection");
var inputSection = document.querySelector(".input"); */

var View = (function() {
    var self = {
        Prepare: function() {
            inputSection = document.querySelector(".input");
            collectionSection = document.querySelector(".collection");
        },
        PrepareNavigation: function(onNewRequest, onListRequest) {
            var links = document.querySelectorAll("#navigation a");

            links[0].onclick = function(e) {
                    e.preventDefault();
                    // console.log("1");
                    onNewRequest();
                },
                links[1].onclick = function(e) {
                    e.preventDefault();
                    // console.log("2");
                    onListRequest();
                }
        },
        ShowInputSection: function(onSubmit) {
            collectionSection.style.display = "none";
            inputSection.style.display = "block";

            inputSection.querySelector('.message').style.display = "none";

            inputSection.querySelector('button').onclick = function(e) {
                e.preventDefault();

                var title = document.getElementById('title').value;
                var description = document.getElementById('description').value;
                if (title) onSubmit(title, description);
            };
        },
        ShowInsertMessage: function() {
            inputSection.querySelector('.message').style.display = "block";
            document.getElementById('title').value = "";
            document.getElementById('description').value = "";
        },
        ShowCollectionSection: function(items, onDone) {

            SwitchToCollectionView();

            if (items.length) UpdateList(items, onDone);
            else ShowEmptyMessage();
        }
    };

    function SwitchToCollectionView() {
        inputSection.style.display = "none";
        collectionSection.style.display = "block";
    }

    function UpdateList(items, onDone) {
        var html = '';

        // console.log(items);
        for (var i in items) {
            var item = items[i];

            html += ('<li class="container col-sm-8 card p-4 mt-3 d-flex lists"><h5 class="text-left">' + item.title + '</h5><p class="text-left">' + item.description + '</p><a href="" data-index="' + item.index + '" class="col-sm-3 ml-auto" style="color: green;"><i class="fas fa-check"></i> Elkészült</a></li>');
        }
        document.querySelector("ul").innerHTML = html;

        function DoneClick(evt) {
            evt.preventDefault();
            // this.setAttribute("href", "https://google.com");
            // console.log("Done");
            // console.log(this);
            // this.style.color = "red";
            var index = this.getAttribute("data-index");
            // console.log(index);
            onDone(parseInt(index));
        }
        var links = document.querySelectorAll("ul a");

        for (var i in links) {
            links[i].onclick = DoneClick;
        }
    }

    function ShowEmptyMessage() {
        document.querySelector("ul").innerHTML = '<li class="container col-sm-8 card p-4 mt-3 d-flex lists"><h5 class="text-left">Nincs teendőd!</h5><p class="text-left">Hozz létre új teendőt!</p></li>';
    }

    var inputSection = null;
    var collectionSection = null;

    return self;
})();