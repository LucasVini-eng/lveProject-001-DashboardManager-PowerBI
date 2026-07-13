const DASHBOARDS = [
    { id: 'Marketing', name: 'Marketing', url: 'https://app.powerbi.com/view?r=eyJrIjoiOTg5MmNmMWQtMWNhMy00ODY0LThjNjQtY2M1OTM0ZjIwMmE5IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9' },
    { id: 'Comercial', name: 'Comercial', url: 'https://app.powerbi.com/view?r=eyJrIjoiMGE5NTI3NzEtNGM0MS00NjNkLTlkNjktZjMwN2FmMDc1MzcyIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9' }
];

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('show'); }
function loadDashboard(id) {
            const dash = DASHBOARDS.find(d => d.id === id);
            document.getElementById('dashboard-iframe').src = dash.url;
            document.querySelectorAll('.nav-link-custom').forEach(el => el.classList.remove('active'));
            document.getElementById(`link-${id}`).classList.add('active');
            if(window.innerWidth < 720) toggleSidebar();
}

const container = document.getElementById('dashboard-links');
DASHBOARDS.forEach(dash => {
    const link = document.createElement('div');
        link.id = `link-${dash.id}`;
        link.className = `nav-link-custom ${dash.id === DASHBOARDS[0].id ? 'active' : ''}`;
        link.innerHTML = dash.name;
        link.onclick = () => loadDashboard(dash.id);
        container.appendChild(link);
});

document.getElementById('dashboard-iframe').src = DASHBOARDS[0].url;