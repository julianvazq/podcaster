import React from 'react';
import * as S from './styles';

const EpisodeTable = ({ episodes }) => {
    return (
        <S.TableContainer>
            <S.Table>
                <S.THead>
                    <S.Row>
                        <S.Header>Title</S.Header>
                        <S.Header>Date</S.Header>
                        <S.Header>Duration</S.Header>
                    </S.Row>
                </S.THead>
                <S.TBody>
                    {episodes.map((e) => (
                        <S.Row key={e.id}>
                            <S.Cell>
                                <S.EpisodeLink to={`episode/${e.id}`}>
                                    {e.title}
                                </S.EpisodeLink>
                            </S.Cell>
                            <S.Cell>
                                {new Date(e.date).toLocaleDateString('en-GB')}
                            </S.Cell>
                            <S.Cell>{e.duration}</S.Cell>
                        </S.Row>
                    ))}
                </S.TBody>
            </S.Table>
        </S.TableContainer>
    );
};

export default EpisodeTable;
