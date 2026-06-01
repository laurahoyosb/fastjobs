// js/components.js
function renderWorkers(workers) {
    const container = document.getElementById('workersList');
    if (!container) return;
    
    container.innerHTML = workers.map(worker => `
        <div class="worker-card" data-worker-id="${worker.id}">
            <div class="worker-info">
                <div class="worker-name">${worker.name}</div>
                <div class="worker-profession">${worker.profession}</div>
                <div class="worker-details">
                    <span class="rating">⭐ ${worker.rating}</span>
                    <span><i class="fa-regular fa-comment"></i> ${worker.reviews}</span>
                    <span><i class="fa-regular fa-clock"></i> ${worker.distance} km</span>
                </div>
            </div>
            <div class="worker-price">
                <button class="hire-btn" data-id="${worker.id}">Desde $${worker.price.toLocaleString()}</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to hire buttons
    document.querySelectorAll('.hire-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const workerId = parseInt(btn.dataset.id);
            const worker = workersData.find(w => w.id === workerId);
            if (worker) {
                localStorage.setItem('selectedWorker', JSON.stringify(worker));
                window.location.href = 'pages/tracking.html';
            }
        });
    });
}

function filterByCategory(category) {
    if (category === 'mas') {
        renderWorkers(workersData);
        return;
    }
    const filtered = workersData.filter(w => w.category === category);
    renderWorkers(filtered);
}

function searchWorkers(query) {
    if (!query.trim()) {
        renderWorkers(workersData);
        return;
    }
    const filtered = workersData.filter(w => 
        w.name.toLowerCase().includes(query.toLowerCase()) ||
        w.profession.toLowerCase().includes(query.toLowerCase())
    );
    renderWorkers(filtered);
}