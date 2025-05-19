import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste componente PostComment', () => {
    it('Componente renderizado', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Adicionado dois comentario', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('form-textarea'), {
            target: {
                value: 'Comentario adicionado',
            }
        });
        fireEvent.click(screen.getByTestId('form-button'));

        fireEvent.change(screen.getByTestId('form-textarea'), {
            target: {
                value: 'Segundo comentario adicionado',
            }
        });
        fireEvent.click(screen.getByTestId('form-button'));
        expect(screen.getAllByTestId('comment-item')).toHaveLength(2);
    });
});