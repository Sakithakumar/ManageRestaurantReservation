<script>
    const reservations = [];

    function addReservation() {
        const name = document.getElementById('name').value.trim();
        const guests = document.getElementById('guests').value.trim();
        const time = document.getElementById('time').value;

        if (name && guests && time) {
            const reservation = { name, guests, time };
            reservations.push(reservation);
            displayReservations();
            document.getElementById('name').value = '';
            document.getElementById('guests').value = '';
            document.getElementById('time').value = '';
        } else {
          alert("Please fill in all fields.");
        }
    }

    function displayReservations() {
        const list = document.getElementById('reservations-list');
        list.innerHTML = '';
        
        reservations.forEach((res, index) => {
            list.innerHTML += `<li>${res.name} - ${res.guests} guests at ${new Date(res.time).toLocaleString()} 
                <button onclick="cancelReservation(${index})">Cancel</button></li>`;
        });
    }

    function cancelReservation(index) {
        reservations.splice(index, 1);
        displayReservations();
    }
</script>
