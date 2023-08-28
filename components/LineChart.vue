<script setup>
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const jwt = defineProps(['token']);

const { data: weekStats } = await useFetch(
  () => `http://localhost:8000/aspirations/statistics/per_week`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: jwt,
    },
  }
);

const chartData = ref({
  labels: weekStats.value.data.week,
  datasets: [
    {
      label: 'Jumlah Aspirasi',
      backgroundColor: '#89CFF0',
      data: weekStats.value.data.stat,
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
    <Line
    :data="chartData"
    :options="chartOptions"
    />
  </div>
</template>
