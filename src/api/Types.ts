export interface RefreshProp {
  refresh: string | undefined;
}

export interface FormularioQuery {
  id?: number;
  nombre?: string;
  nombre__contains?: string;
  nombre__icontains?: string;
  nombre__search?: string;
  ordering?: string;
  page?: string;
  page_size?: string;
  search?: string;
}
