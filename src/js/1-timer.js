
    import flatpickr from "flatpickr";
    import "flatpickr/dist/flatpickr.min.css";
    import iziToast from 'izitoast';
    import 'izitoast/dist/css/iziToast.min.css';

    document.addEventListener('DOMContentLoaded', () => {
        startBtn.disabled = true;
    });

    const daysEl = document.querySelector('[data-days]');
    const hoursEl = document.querySelector('[data-hours]');
    const minutesEl = document.querySelector('[data-minutes]');
    const secondsEl = document.querySelector('[data-seconds]');
    const startBtn = document.querySelector('button[data-start]');
    const inputPlace = document.querySelector('#datetime-picker');

    let countdown;
    let userSelectedDate;

    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            userSelectedDate = selectedDates[0];

            const now = new Date();
            if (userSelectedDate <= now) {
                startBtn.disabled = true;
                iziToast.warning({
                    title: 'Warning',
                    message: 'Please choose a date in the future',
                });
            } else {
                startBtn.disabled = false;
                inputPlace._flatpickr.config.disable = [userSelectedDate];
                
            }
        },
    };

    function addLeadingZero(value) {
        return value.toString().padStart(2, '0');
    }

    function updateTimer(selectedDate) {
        countdown = setInterval(() => {
            const now = new Date();
            const diff = selectedDate - now;

            if (diff <= 0) {
                clearInterval(countdown);
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                startBtn.disabled = false;
                flatpickr("#datetime-picker").set('disabled', false); 
                return;
            }

            const remainingTime = convertMs(diff);
            daysEl.textContent = addLeadingZero(remainingTime.days);
            hoursEl.textContent = addLeadingZero(remainingTime.hours);
            minutesEl.textContent = addLeadingZero(remainingTime.minutes);
            secondsEl.textContent = addLeadingZero(remainingTime.seconds);
        }, 1000);
    }

    function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    }

    flatpickr("#datetime-picker", options);

    startBtn.addEventListener('click', () => {
        if (startBtn.disabled) return; 

        const now = new Date();
        const diff = userSelectedDate - now;

        if (diff <= 0) {
            iziToast.error({
                title: 'Error',
                message: 'Invalid date selected',
            });
            return;
        }

        startBtn.disabled = true;
        flatpickr(inputPlace).close(); 
        updateTimer(userSelectedDate);
    });