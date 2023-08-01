<script setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const jwt = defineProps(['token']);

const { data: monthStats } = await useFetch(
  () => `http://localhost:8000/aspirations/statistics/per_month`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: jwt,
    },
  }
);

const chartData = ref({
  labels: monthStats.value.data.month,
  datasets: [
    {
      label: 'Jumlah Aspirasi',
      backgroundColor: '#89CFF0',
      data: monthStats.value.data.stat,
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

</script>

<template>
  <div>
    <Bar
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>
