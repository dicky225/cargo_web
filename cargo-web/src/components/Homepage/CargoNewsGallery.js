import '../../App.css';

const newsItems = [
    {
        date: '25 November 2025',
        title: 'CargoAir releases traffic figures for October 2025',
        description:
            'Latest monthly performance update and network highlights for our cargo operations.',
    },
    {
        date: '09 November 2025',
        title: 'CargoAir transports priceless museum collection',
        description:
            'Special handling for sensitive artefacts showcasing our end-to-end logistics expertise.',
    },
    {
        date: '24 October 2025',
        title: 'CargoAir expands its global freighter network',
        description:
            'Additional routes strengthen connectivity across key trade lanes worldwide.',
    },
];

function CargoNewsGallery() {
    return (
        <section className="news" aria-labelledby="news-heading">
            <h2 id="news-heading" className="section-title">
                CargoAir news
            </h2>
            <div className="news-grid">
                {newsItems.map((item) => (
                    <article key={item.title} className="news-card">
                        <div className="news-card-image" aria-hidden="true" />
                        <div className="news-card-content">
                            <p className="news-date">{item.date}</p>
                            <h3 className="news-title">{item.title}</h3>
                            <p className="news-description">{item.description}</p>
                            <button className="link-button">Read more</button>
                        </div>
                    </article>
                ))}
            </div>
            <div className="news-actions">
                <button className="secondary-button">View all news</button>
            </div>
        </section>
    );
}

export default CargoNewsGallery;
