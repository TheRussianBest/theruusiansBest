// Пример простого графика на Canvas для раздела "О нас"
const ctx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
		datasets: [
			{
				label: 'Рост инвестиций',
				data: [100, 150, 200, 250, 300, 350],
				borderColor: '#ff9800',
				backgroundColor: 'rgba(255, 152, 0, 0.2)',
				borderWidth: 2,
			},
		],
	},
	options: {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
