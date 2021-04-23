<template>
<div class='px-5 py-3'>
    <h3 class="font-bold text-xs">TAGS</h3>

    <div class='flex flex-wrap py-2'>
        <span v-for="tag in tags" :key="tag.id" class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#{{tag.name}}</span>

        <span @click="showModal = true" class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer"> Thêm Tag</span>

    </div>
    <transition name="fade">
        <div v-show="showModal" class="fixed inset-0 z-30">
            <main class="flex flex-col items-center justify-center h-full w-full">
                <transition name="fade-up-down">
                    <div v-show="showModal" class="modal-wrapper inline-block flex items-center z-30">
                        <div class="modal max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-white max-h-screen shadow-lg flex-row rounded relative">
                            <div class="modal-header p-5 bg-gray-900 text-gray-900 rounded-t">
                                <h5 class="text-white text-xl uppercase">add new tag</h5>
                            </div>
                            <div class="modal-body p-5 w-full h-full overflow-y-auto ">
                                <div class="px-3 mb-6">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                        Tag Name
                                    </label>
                                    <input v-model="form.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Tag Name">
                                    <p class="text-red text-xs italic">Please fill out this field.</p>
                                </div>

                            </div>

                            <div class="modal-footer py-3 px-5 border0-t text-right ">
                                <button class="bg-gray-200 px-5 py-2 text-black rounded mr-3" @click="handleCancel">Close</button>
                                <button class="bg-green-500 px-5 py-2 text-white rounded" @click="handleOk">OK</button>
                            </div>
                        </div>
                    </div>
                </transition>

            </main>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            tags: [],
            outerVisible: false,
            showModal: false,
            form: {
                name: ''
            }
        }
    },
    methods: {
        List() {
            this.$repositories.Tag.all().then(res => {
                this.tags = res.data
            })
        },
        handleCancel() {
            this.showModal = false
            this.form = {}
        },
        handleOk() {
            this.$repositories.Tag.create(this.form).then(res => {
                this.handleCancel()
                this.List()
            })
        }
    },
    mounted() {
        this.List()
    }
}
</script>

<style>
.modal-body {
    max-height: 500px;
    width: 750px;
}

.bg-gray-800-opacity {
    background-color: #2D374850;
}

@media screen and (max-width: 768px) {
    .modal-body {
        max-height: 400px;
    }
}

/* animation for vue transition tag */

.fade-up-down-enter-active {
    transition: all 0.3s ease;
}

.fade-up-down-leave-active {
    transition: all 0.3s ease;
}

.fade-up-down-enter {
    transform: translateY(10%);
    opacity: 0;
}

.fade-up-down-leave-to {
    transform: translateY(10%);
    opacity: 0;
}

.fade-enter-active {
    -webkit-transition: opacity 2s;
    transition: opacity .3s;

}

.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
