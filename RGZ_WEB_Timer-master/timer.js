
    function startTimer() {

        let date = document.getElementById('date').value
        let deadline = new Date(date)
      //  let secondDeadline=deadline
        deadline.setHours(0)
        const diff = new Date()
        console.log(diff)
        console.log(deadline)
        console.log(deadline < diff)
        if (deadline < diff) {
            document.getElementById('timer').style.display = 'none'
            document.getElementById('error').style.display = 'block'
        } else {
            document.getElementById('timer').style.display = 'block'
            document.getElementById('error').style.display = 'none'
            let timerId = null;

            // склонение числительных
            function declensionNum(num, words) {
                return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
            }

            // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
            function countdownTimer() {
                const diffMs = deadline - new Date();
                // console.log(diffMs)
                if (diffMs <= 0) {
                    clearInterval(timerId);
                }
                const days = diffMs > 0 ? Math.floor(diffMs / 1000 / 60 / 60 / 24) : 0;
                const hours = diffMs > 0 ? Math.floor(diffMs / 1000 / 60 / 60) % 24 : 0;
                const minutes = diffMs > 0 ? Math.floor(diffMs / 1000 / 60) % 60 : 0;
                const seconds = diffMs > 0 ? Math.floor(diffMs / 1000) % 60 : 0;
                $days.textContent = days < 10 ? '0' + days : days;
                $hours.textContent = hours < 10 ? '0' + hours : hours;
                $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
                $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
                $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
                $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
                $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
                $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
            }

            // получаем элементы, содержащие компоненты даты
            const $days = document.querySelector('.timer__days');
            const $hours = document.querySelector('.timer__hours');
            const $minutes = document.querySelector('.timer__minutes');
            const $seconds = document.querySelector('.timer__seconds');
            // вызываем функцию countdownTimer
            countdownTimer();
            // вызываем функцию countdownTimer каждую секунду
            timerId = setInterval(countdownTimer, 1000);
        }
    }

