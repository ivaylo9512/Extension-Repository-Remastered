var app = (() => {

    var count = 10;
    var home = (e) => {
        preventDefault(e);
        remote.mostRecentUploads(count,remote.mostRecentUploads);
        remote.mostDownloads(count,remote.mostDownloads);
    }


    var start = () => {

        $("#search").on('click', getSearchView);

        home();
    }

    var getSearchView = (e) => {
        preventDefault(e);
        show.searchView();
    }

    var searchFieldName;

    var search = (e) => {
        preventDefault(e);
        if (!hitEnter(e)) return;

        searchFieldName = $('#name').val();
        remote.searchByName(searchFieldName, remote);
    }

    function preventDefault(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    function hitEnter(e) {
        if (e.type === 'keypress' && e.which !== 13) {
                return false;
        }
        return true
    }


    return {
        start,
        home,
        search
    }
})();

app.start();