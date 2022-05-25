import { actionCreators, mapStateToProps } from './ArtistSearch';

export type StateProps = typeof actionCreators &
  ReturnType<typeof mapStateToProps>;

export type Props = {
    data: any[];
    onQueryParamChange: (params: any) => void;
};

export type ArtistSearchProps = StateProps & Props;
