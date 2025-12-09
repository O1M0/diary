// js/modules/loading.js
export function initLoading() {
    document.body.classList.add('is-loading');

    window.addEventListener('load', () => {
        const loading = document.getElementById('loading');
        if (!loading) {
            document.body.classList.remove('is-loading');
            return;
        }

        setTimeout(() => {
            loading.classList.add('is-hidden');
            document.body.classList.remove('is-loading');
        }, 800);
    });
}
