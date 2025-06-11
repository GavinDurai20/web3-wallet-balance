document.getElementById('connectBtn').addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const accounts = await web3.eth.getAccounts();
      const wallet = accounts[0];
      document.getElementById('walletAddress').textContent = wallet;

      const balanceWei = await web3.eth.getBalance(wallet);
      const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
      document.getElementById('ethBalance').textContent = parseFloat(balanceEth).toFixed(4);
    } catch (error) {
      console.error("Connection Error:", error);
    }
  } else {
    alert('Please install Metamask!');
  }
});
