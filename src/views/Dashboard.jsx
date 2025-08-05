
import Sidebar from '../components/Sidebar';
import './Dashboard.css'; // opcional para layout general

function Dashboard() {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-content">
                <h1>Bienvenido al Dashboard</h1>
                <p>Aquí puedes ver tus finanzas, perfil y más.</p>
                <div class="parent">
                    <div class="div1 elements">1</div>
                    <div class="div2 elements">2</div>
                    <div class="div4 elements">4</div>
                    <div class="div5 elements">5</div>
                    <div class="div6 elements">6</div>
                    <div class="div7 elements">7</div>
                </div>
            </div>
        </div>
    );

}
export default Dashboard;