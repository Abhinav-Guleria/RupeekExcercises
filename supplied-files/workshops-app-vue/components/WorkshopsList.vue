<template>
    <div>
        <div class="col-12 clearfix">
            <h1>
                Workshops
                <div class="float-right">
                    <button class="btn btn-sm btn-primary">
                        Show details
                    </button>
                </div>
            </h1>
            <hr />
        </div>
        <div class="col-12 clearfix">
            <div class="row">
                <div class="col-4 d-flex">
                    <a href="#" class="text-reset text-decoration-none w-100 my-3 d-flex flex-column">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-img-container d-flex flex-column justify-content-center">
                                    <img class="card-img-top w-50 d-block mx-auto" src="" alt="" />
                                </div>
                                <h4 class="card-title"><!-- workshop.name --></h4>
                                <div class="card-text">
                                    <div>
                                        <!-- dates -->
                                    </div>
                                    <div>
                                        <span><!-- workshop.time --></span>
                                    </div>
                                    <div class="my-3"><!-- description --></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Alert from './utils/Alert';
import workshops from '@/data/workshops';

// eslint-disable-next-line
const LOADING = 'LOADING';
// eslint-disable-next-line
const LOADED = 'LOADED';
// eslint-disable-next-line
const ERROR_LOADING = 'ERROR_LOADING';

export default {
    components: { Alert },
    data() {
        return {
            showDescriptions: false,
            status: LOADED,
            workshops,
            error: null
        }
    },
    methods: {
        toggleDescriptions() {
            this.showDescriptions = !this.showDescriptions;
        }
    }
}
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