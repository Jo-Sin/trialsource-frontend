export function scrollToElement(event: React.MouseEvent<HTMLElement, MouseEvent>, id: string, padding: number = 0) {
    event.preventDefault();

    const element = document.getElementById(id);
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - padding;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}