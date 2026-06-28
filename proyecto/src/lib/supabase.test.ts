import { describe, it, expect } from "vitest";
import type { Auto } from "./supabase";

describe("Auto type", () => {
  it("debería crear un auto válido con todos los campos", () => {
    const auto: Auto = {
      id: "1",
      user_id: "user-123",
      marca: "Ford",
      modelo: "Mustang",
      anio: 1967,
      estilo: "Muscle",
      motor: "V8",
      color: "rojo",
      favorito: true,
      created_at: "2024-01-01",
    };

    expect(auto.marca).toBe("Ford");
    expect(auto.favorito).toBe(true);
    expect(auto.anio).toBe(1967);
  });

  it("debería permitir anio, estilo y motor como null", () => {
    const auto: Auto = {
      id: "2",
      user_id: "user-456",
      marca: "Chevrolet",
      modelo: "Camaro",
      anio: null,
      estilo: null,
      motor: null,
      color: "negro",
      favorito: false,
      created_at: "2024-06-01",
    };

    expect(auto.anio).toBeNull();
    expect(auto.estilo).toBeNull();
    expect(auto.motor).toBeNull();
  });
});
