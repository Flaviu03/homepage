document.onreadystatechange = updateClock()

function updateClock() {
    const date = new Date()
    document.getElementById("current-time-text").innerText = date.toLocaleTimeString([], { hourCycle: 'h23' })
    const hour = date.getHours()
    if (hour < 5 || hour >= 18) {
        document.getElementById("time-greeting").innerText = "Good evening."
    }
    else if (hour < 12) {
        document.getElementById("time-greeting").innerText = "Good morning."
    }
    else {
        document.getElementById("time-greeting").innerText = "Good afternoon."
    }
}

setInterval(updateClock, 1000)

function doSearch() {
    const query = document.getElementById('search-input').value
    switch (document.getElementById("search-engine-select").value) {
        case 'Google' :
            window.location.href =  `https://www.google.com/search?q=${query}`
            break;
		case 'TJ\'s SearXNG Instance':
			window.location.href = `https://vps65183880.delta-networks.de/searxng/search?q=${query}`
			break;
        case 'TJ\'s LibreX Instance':
            window.location.href = `https://vps65183880.delta-networks.de/librex/search.php?q=${query}`
            break;
        case 'DuckDuckGo':
            window.location.href = `https://duckduckgo.com/?q=${query}`
    }
}

//ghetto as fuck
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === 'Enter') {
    const searchButton = document.getElementById('search-button');
    searchButton.click();
  }
  else{
    if (key === '-') {
      document.addEventListener('keydown', function(event) {
        const secondKey = event.key;
        if (secondKey === '-') {
          document.addEventListener('keydown', function(event) {
            const thirdKey = event.key;
            if (thirdKey.toLowerCase() === 'c') {
              document.addEventListener('keydown', function(event) {
                const fourthKey = event.key;
                if (fourthKey.toLowerCase() === 'o') {
                  document.addEventListener('keydown', function(event) {
                    const fifthKey = event.key;
                    if (fifthKey.toLowerCase() === 'l') {
                      document.addEventListener('keydown', function(event) {
                        const sixthKey = event.key;
                        if (sixthKey.toLowerCase() === 'o') {
                          document.addEventListener('keydown', function(event) {
                            const seventhKey = event.key;
                            if (seventhKey.toLowerCase() === 'r') {
                              const colorPicker = document.getElementById('color-picker');
                              colorPicker.style.display = 'block';
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  }
    
});

const colorPicker = document.getElementById('color-picker');
const highlightText = document.querySelector('.--fg-highlight');
  colorPicker.addEventListener('change', function(event) {
    const color = event.target.value;
    document.documentElement.style.setProperty('--fg-highlight', color);
    localStorage.setItem('--fg-highlight', color);
    highlightText.style.color = color;
});


const savedColor = localStorage.getItem('--fg-highlight');
  if (savedColor) {
    document.documentElement.style.setProperty('--fg-highlight', savedColor);
    highlightText.style.color = savedColor;
    colorPicker.value = savedColor;
}

