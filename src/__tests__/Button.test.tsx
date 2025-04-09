import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const Button = ({ onClick }: { onClick: () => void }) => {
    return <button onClick={onClick}>Click Me</button>
};

test('calls onClick when button is clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);

    await userEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});