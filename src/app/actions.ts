"use server"

import { discoverMovies } from "@/app/lib/service/api/discovery";

export async function fetchDiscoveries(page: number, sort: string) {
    return discoverMovies(page, sort)
  }
