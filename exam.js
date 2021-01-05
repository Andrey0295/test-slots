// const anim = {
//     slot0: {
//       node: null,
//       currentPosition: 100,
//     },
//     slot1: {
//       node: null,
//       currentPosition: 100,
//     },
//     slot2: {
//       node: null,
//       currentPosition: 100,
//     },
//   };
  
//   const positions = [300, 550, 800, 1050, 1290, 1500]; // background-position-y for each element
  
//   const getRandomInt = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   window.onload = () => {
//     const slots = document.getElementsByClassName('sprite');
//     anim.slot0.node = slots[0];
//     anim.slot1.node = slots[1];
//     anim.slot2.node = slots[2];
//     const loading = document.getElementsByClassName('loading')[0];
//     loading.className = 'loading';
//     const button = document.getElementsByClassName('button')[0];
//     button.addEventListener('click', startGame);
//   }
  
//   const winningChanse = 3; // one of {value}
  
//   const startGame = () => {
//     const { slot0, slot1, slot2 } = anim;
//     slot0.node.className = 'sprite rotate';
//     slot1.node.className = 'sprite rotate';
//     slot2.node.className = 'sprite rotate';
//     const isWin = getRandomInt(1, winningChanse) === winningChanse;
//     const positionIndex0 = getRandomInt(0, 7);
//     const positionIndex1 = isWin ? positionIndex0 : getRandomInt(0, 7);
//     const positionIndex2 = isWin ? positionIndex0 : getRandomInt(0, 7);
//     setTimeout(() => {
//       slot0.node.className = 'sprite';
//       slot0.node.style.backgroundPositionY = `${positions[positionIndex0]}px`;
//       slot0.currentPosition = positionIndex0;
//     }, 1000);
//     setTimeout(() => {
//       slot1.node.className = 'sprite';
//       slot1.node.style.backgroundPositionY = `${positions[positionIndex1]}px`;
//       slot1.currentPosition = positionIndex1;
//     }, 2000);
//     setTimeout(() => {
//       slot2.node.className = 'sprite';
//       slot2.node.style.backgroundPositionY = `${positions[positionIndex2]}px`;
//       slot2.currentPosition = positionIndex2;
//     }, 3000);
//     setTimeout(() => {
//       console.log('slot0.currentPosition', slot0.currentPosition);
//       console.log('slot1.currentPosition', slot1.currentPosition);
//       console.log('slot2.currentPosition', slot2.currentPosition);
//       if (slot0.currentPosition === slot1.currentPosition && slot1.currentPosition === slot2.currentPosition) {
//         alert('You win')
//       } else {
//         alert('You lose')
//       }
//     }, 3100);