import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

export function useSupabaseData(table, options = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let query = supabase.from(table).select('*');

        if (options.order) {
          query = query.order(options.order, { ascending: options.ascending ?? false });
        }
        if (options.limit) {
          query = query.limit(options.limit);
        }

        const { data: result, error: err } = await query;
        if (err) throw err;
        setData(result || []);
      } catch (err) {
        console.error(`Error fetching ${table}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [table, options.order, options.ascending, options.limit]);

  return { data, loading, error };
}