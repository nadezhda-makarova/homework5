const listInteresting = document.querySelectorAll('.interest');

listInteresting.forEach((item) => {
  item.addEventListener('click', (e) => {
    const childrenList = item.querySelector('.interests_active');
    if(childrenList) {
      const childrenListItem = childrenList.querySelectorAll('.interest__check');
      if(e.target.checked) {
        childrenListItem.forEach(item => {
          item.checked = 'checked';
        });
      } else {
        childrenListItem.forEach(item => {
          item.checked = false;
        });
      }
    }
  })
})