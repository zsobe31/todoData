// console.log("Controller");

var Controller = (function() {
    var self = {
        Prepare: function() {
            View.Prepare();
            View.PrepareNavigation(self.InputActivity, self.CollectionActivity);
        },
        InputActivity: function() {
            View.ShowInputSection(InsertRequest);
        },
        CollectionActivity: function() {
            var items = Model.GetAll();
            View.ShowCollectionSection(items, function(index) {
                // console.log(index);
                Model.SetDone(index);
                self.CollectionActivity();
            });
        }
    };

    function InsertRequest(title, description) {
        // console.log(title);
        // console.log(description);

        Model.Insert(title, description);
        View.ShowInsertMessage();
    }

    return self;
})();