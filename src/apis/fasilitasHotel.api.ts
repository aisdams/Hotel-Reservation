import { axios } from '@/lib/axios';
import { generateSearchQuery } from '@/lib/utils';
import {
  FasilitasHotel,
  FasilitasHotelCreateInput,
  FasilitasHotelUpdateInput,
  Pagination,
  Res,
} from '@/types';
import { SearchQuery } from '@/types/global';

export const create = async (payload: FasilitasHotelCreateInput) => {
  const res = await axios.post('/fasilitas-hotel', payload);

  return res.data;
};

export const getAll = async ({
  page = 1,
  limit = 10,
  searchQueries,
}: Pagination): Promise<Res<FasilitasHotel[]>> => {
  const { strings } = generateSearchQuery({ searchQueries });

  const res = await axios.get(
    `/fasilitas-hotel?page=${page}&limit=${limit}${strings}`
  );

  return res.data;
};

export const getById = async ({
  id,
  searchQueries,
}: {
  id: string;
  searchQueries?: SearchQuery[];
}): Promise<Res<FasilitasHotel>> => {
  const { strings } = generateSearchQuery({ searchQueries });

  const res = await axios.get(
    `/fasilitas-hotel/${id}?${strings.split(/&(.*)/)[1]}`
  );
  return res.data;
};

export const updateById = async ({
  id,
  data,
}: {
  id: string;
  data: FasilitasHotelUpdateInput;
}) => {
  const res = await axios.put(`/fasilitas-hotel/${id}`, data);

  return res.data;
};

export const deleteById = async (id: string) => {
  const res = await axios.delete(`/fasilitas-hotel/${id}`);
  return res.data;
};

export const approve = async ({ id }: { id: string }) => {
  const res = await axios.put(`/fasilitas-hotel/approve/${id}`);

  return res.data;
};
