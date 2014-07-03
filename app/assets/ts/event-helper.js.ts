class EventHelper {

    delegates() {
        this.editHelper();
    }

    private editHelper() {
        $('.btn-edit').on('click', function() {
            location.href = $(this).data('link');
        });
    }

}
