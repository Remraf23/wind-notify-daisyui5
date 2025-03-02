<template>
    <div>
        <div class="w-full">
            <div class="hero min-h-screen bg-base-300">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://raw.githubusercontent.com/mariojgt/wind-notify/main/art/logo_large.png"
                                alt="windy" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Wind
                                <div class="badge badge-secondary">Notify</div>
                            </h2>
                            <p>Wind-Notify provide a simple and easy way to display tailwind and
                                daisy UI toast notification with almost zero configuration, works
                                using Vanilla js and basic inject the div that will handle the toast
                                all you need is to import and call ONE method.</p>
                            <div class="card-actions justify-end">
                                <div class="badge">
                                    <a target="_blank" href="https://tailwindcss.com/">Tailwind</a>
                                </div>
                                <div class="badge badge-primary">
                                    <a target="_blank" href="https://daisyui.com/">Daisy ui</a>
                                </div>
                                <div class="badge badge-secondary">Vanilla Js</div>
                                <div class="badge badge-outline">Light weight</div>
                            </div>
                            <div class="alert alert-warning shadow-lg mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="stroke-black shrink-0 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <h3 class="font-bold">New message!</h3>
                                    <div class="text-xs">If you like my work, consider supporting.</div>
                                </div>
                                <a href='https://ko-fi.com/D1D5EJZ3P' target='_blank'><img height='36'
                                        style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=3'
                                        border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-10">
                <h1 class="text-5xl font-bold pb-10">Usage Example</h1>

                <div>
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Position?</legend>
                        <select class="select select-bordered w-full" v-model="position">
                            <option disabled selected>Select the position</option>
                            <option value="top">Top</option>
                            <option value="bottom">Bottom</option>
                            <option value="right">Right</option>
                            <option value="left">Left</option>
                            <option value="middle">Middle</option>
                        </select>
                    </fieldset>
                   
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Notification Display Time?</legend>
                        <input type="text" placeholder="Display Time" class="input w-full" v-model="displayTime" />
                        <p class="fieldset-label">Must be in seconds</p>
                    </fieldset>

                    <div class="
                    mt-5
            preview
            pt-5
            bg-base-200
            rounded-b-box rounded-tr-box
            flex flex-wrap
            items-center
            justify-center
            gap-2
            overflow-x-hidden
            border
            bg-cover bg-top
            p-10
            undefined
            " style="background-size: 5px 5px">
                        <button class="uppercase btn" @click="
                            startWindToast(
                                'Generic Example!',
                                'This is a generic example',
                                '',
                                displayTime,
                                position
                            )
                            ">
                            generic
                        </button>
                        <button class="uppercase btn btn-success" @click="
                            startWindToast(
                                'Success Example!',
                                'This is a success example',
                                'success',
                                displayTime,
                                position
                            )
                            ">
                            success
                        </button>
                        <button class="uppercase btn btn-info" @click="
                            startWindToast(
                                'Info Example!',
                                'This is a info example',
                                'info',
                                displayTime,
                                position
                            )
                            ">
                            info
                        </button>
                        <button class="uppercase btn btn-error" @click="
                            startWindToast(
                                'Error Example!',
                                'This is a error example',
                                'error',
                                displayTime,
                                position
                            )
                            ">
                            error
                        </button>
                        <button class="uppercase btn btn-warning" @click="
                            startWindToast(
                                'Warning Example!',
                                'This is a warning',
                                'warning',
                                displayTime,
                                position
                            )
                            ">
                            warning
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full p-10">
                <h1 class="text-5xl font-bold pb-10">Get started</h1>
                <p class="pb-6">Installation</p>
                <div class="mockup-code">
                    <pre data-prefix="$" class="text-warning"><code>npm i @mariojgt/wind-notify</code></pre>
                </div>
                <p class="py-6">Import the class</p>
                <div class="mockup-code">
                    <pre data-prefix="$"
                        class="text-success"><code>import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";</code></pre>
                </div>
                <p class="py-6">How to use the notify class</p>
                <div class="mockup-code">
                    <pre data-prefix="$" class="text-gray-500"><code>// title = you notification title</code></pre>
                    <pre data-prefix="$" class="text-gray-500"><code>// message = you notification message</code></pre>
                    <pre data-prefix="$"
                        class="text-gray-500"><code>// alertType = warning, success, info , error</code></pre>
                    <pre data-prefix="$"
                        class="text-gray-500"><code>// time = How long that notification will be available need to be in frames</code></pre>
                    <pre data-prefix="$" class="text-gray-500"><code>// position = top, bottom, right, left</code></pre>
                    <pre data-prefix="$"
                        class="text-info"><code>startWindToast(title, message, alertType, time, position)</code></pre>
                </div>
                <div class="bg-base-300 mt-10 card border">
                    <div class="tabs m-3">
                        <a class="tab tab-lg tab-lifted tab-active">Notes</a>
                    </div>
                    <div class="">
                        <div class="card-body">
                            <h2 class="card-title">Explicitly defining this package</h2>
                            <p>
                                Tailwind 4 automatically purges any classes not being used - to explicitly define this package (more info <a class="underline" href="https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources">here</a>) and avoid the relevant classes from this module being purged please include the following line under your tailwind import:
                            </p>
                            <div class="mockup-code text-left">
                                <pre data-prefix="2" class="text-success"><code>@import 'tailwindcss';</code></pre>
                                <pre data-prefix="1" class="text-success"><code>@source '../../node_modules/@remraf23/wind-notify-daisyui5/packages/';</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { startWindToast } from "./../../packages/index.js";

import { ref, onMounted } from "vue";

defineProps({
    msg: String,
});

const count = ref(0);
let position = ref("right");
let displayTime = ref(10);


</script>
