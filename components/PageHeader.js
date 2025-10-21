import { Container } from "react-bootstrap";

function PageHeader({
  title,
  subtitle,
  icon,  
  variant = "default"  
})
{
  return (
    <header className={`page-header-section page-header-${variant}`}>
      <Container>
        <div className="page-header-content">
          {icon && (
            <div className="page-header-icon">
              <i className={`bi bi-${icon}`}></i>
            </div>
          )}
          <h2 className="page-header-title">{title}</h2>
          {subtitle && (
            <p className="page-header-subtitle">{subtitle}</p>
          )}
        </div>
      </Container>
    </header>
  );
}

export default PageHeader;