<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['user'],
});
import * as jose from 'jose';
import { Bar, Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
  );
   
  const headers = useRequestHeaders(['cookie']);
  const { data: token } = await useFetch('/api/token', { headers });
  const { signOut } = useAuth();
  const dataToken = jose.decodeJwt(token.value.jwt);

const { data: monthStats } = await useFetch(
  () => `http://localhost:8000/aspirations/statistics/per_month`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token.value.jwt,
    },
  }
);

const { data: weekStats } = await useFetch(
  () => `http://localhost:8000/aspirations/statistics/per_week`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token.value.jwt,
    },
  }
);

const barChartData = ref({
  labels: monthStats.value.data.month,
  datasets: [
    {
      label: 'Jumlah Aspirasi',
      backgroundColor: '#89CFF0',
      data: monthStats.value.data.stat,
    },
  ],
});
const barChartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

const lineChartData = ref({
  labels: weekStats.value.data.week,
  datasets: [
    {
      label: 'Jumlah Aspirasi',
      backgroundColor: '#89CFF0',
      data: weekStats.value.data.stat,
    },
  ],
});
const lineChartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

onBeforeMount(() => {
  if (dataToken.exp < Date.now() / 1000) {
    signOut();
  }
});
</script>
<template>
  <main class="flex flex-col p-10 pb-10 gap-10 md:ml-64">
    <div>
      <div>
        <h1 class="text-3xl font-bold">{{ monthStats.message }}</h1>
      </div>
      <ClientOnly>
        <div>
          <Bar
          :data="barChartData"
          :options="barChartOptions"
          />
        </div>
      </ClientOnly>
    </div>
    <div>
      <div>
        <h1 class="text-3xl font-bold">{{ weekStats.message }}</h1>
      </div>
      <ClientOnly>
        <div>
          <Line
          :data="lineChartData"
            :options="lineChartOptions"
          />
        </div>
      </ClientOnly>
    </div>
  </main>
</template>
