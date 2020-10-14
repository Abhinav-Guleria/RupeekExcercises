<template>
    <div class="row">
        <div class="col-12 clearfix">
            <div class="row">
                <h2>
                    <!-- workshop.name -->
                </h2>
                <hr />
                <div class="row my-4">
                    <div class="col-4">
                        <img class="img-fluid" src="" alt="" />
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-3">
                                <p>
                                    <small>
                                        <!-- dates -->
                                    </small>
                                </p>
                                <p>
                                    <small class="text-muted">
                                        <!-- time -->
                                    </small>
                                </p>
                            </div>
                            <div class="col-3">
                                <p> 
                                    <!-- 'fa-check' or 'fa-times' -->
                                    <small>Online</small>
                                </p>
                                <p>
                                    <!-- 'fa-check' or 'fa-times' -->
                                    <small>In person</small>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"><!-- description --></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.card {
    cursor: pointer;
}

.card:hover {
    box-shadow: 0px 0px 4px 0px goldenrod;
    background-color: #fcfcfc;
}

.card-img-container {
    min-height: 150px;
    margin: 10px 0;
}
</style>