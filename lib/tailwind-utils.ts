export const withHslOpacityValue = (variable: string) => {
    return ({ opacityVariable }: { opacityVariable?: string }) => {
      console.log("variable: ",variable, " opacityVariable: ", opacityVariable);
      
      if (opacityVariable !== undefined) {
        return `hsla(var(${variable}), var(${opacityVariable}, 1))`;
      }
      return `hsl(var(${variable}))`;
    };
  };