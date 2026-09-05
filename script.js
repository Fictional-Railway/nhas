document.addEventListener('DOMContentLoaded', () => {
  const reserveBtn = document.getElementById('btn-reserve');
  const statusBtn = document.getElementById('btn-status');

  // 空席照会ボタンのアクション
  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      const dep = document.getElementById('dep-airport').value;
      const arr = document.getElementById('arr-airport').value;
      alert(`【新北陸エアシステム】\n${dep} 発 → ${arr} 行きの空席を照会します。`);
    });
  }

  // 運航状況確認ボタンのアクション
  if (statusBtn) {
    statusBtn.addEventListener('click', () => {
      alert('【運航状況】\n現在、全便平常通り運航しております。');
    });
  }
});