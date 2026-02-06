import '../../App.css';

const quickActions = [
    { label: 'Click & Ship' },
    { label: 'Check Flight Schedule' },
    { label: 'Track and Trace' },
    { label: 'Station Capabilities' },
];

function QuickActionsPanel() {
    return (
        <section className="quick-actions" aria-label="Cargo tools">
            {quickActions.map((action) => (
                <button key={action.label} className="quick-action-button">
                    <span className="quick-action-icon">➔</span>
                    <span className="quick-action-label">{action.label}</span>
                    <span className="quick-action-plus">+</span>
                </button>
            ))}
        </section>
    );
}

export default QuickActionsPanel;
