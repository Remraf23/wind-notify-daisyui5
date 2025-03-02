export function createToast(type, title, message) {
    const alertStyles = {
        generic: {
            class: '',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 18.25A6.25 6.25 0 1118.25 12 6.25 6.25 0 0112 18.25z" />
            </svg>`
        },
        info: {
            class: 'alert-info',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 18.25A6.25 6.25 0 1118.25 12 6.25 6.25 0 0112 18.25z" />
            </svg>`
        },
        error: {
            class: 'alert-error',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>`
        },
        warning: {
            class: 'alert-warning',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M6.938 16h10.124c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L4.206 13c-.77 1.333.192 3 1.732 3z" />
            </svg>`
        },
        success: {
            class: 'alert-success',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>`
        }
    };

    const alertConfig = alertStyles[type] || alertStyles.info;

    return `
        <div class="alert ${alertConfig.class} shadow-lg flex justify-between items-start p-4 rounded-lg">
            <div class="flex flex-col w-full">
                <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        ${alertConfig.icon}
                        <h3 class="font-bold text-lg ml-2">${title}</h3>
                    </div>
                    <button class="btn btn-circle btn-sm" onclick="window.removeWindToast(event)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="text-md mb-2">${message}</div>
                <div class="w-full">
                    <progress class="progress progress-neutral w-full h-2 rounded-full" value="50" max="100"></progress>
                </div>
            </div>
        </div>
    `;
}

export const generic = (title, message) => createToast('generic', title, message);
export const info = (title, message) => createToast('info', title, message);
export const error = (title, message) => createToast('error', title, message);
export const warning = (title, message) => createToast('warning', title, message);
export const success = (title, message) => createToast('success', title, message);
