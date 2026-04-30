/**
 * API Service - G.R.E.S. Unidos de Bangu
 * Preparado para futura integração com backend
 */

const API_BASE_URL = '/api/v1'; // Alterar para URL do backend quando disponível

const ApiService = {
  /**
   * Busca dados de conteúdo estático (fallback para JSON local)
   */
  async getContent() {
    try {
      const response = await fetch('/data/content.json');
      if (!response.ok) throw new Error('Falha ao carregar conteúdo');
      return await response.json();
    } catch (error) {
      console.warn('API indisponível, usando dados locais:', error);
      return null;
    }
  },

  /**
   * Envia formulário de contato / interesse
   * @param {Object} data - { nome, email, tipo, mensagem }
   */
  async submitForm(data) {
    try {
      // Futura integração: POST ${API_BASE_URL}/contato
      console.log('Form data para envio:', data);
      return { success: true, message: 'Mensagem enviada com sucesso!' };
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      return { success: false, message: 'Erro ao enviar. Tente novamente.' };
    }
  },

  /**
   * Busca informações do Carnaval 2027
   */
  async getCarnavalInfo() {
    try {
      // Futura integração: GET ${API_BASE_URL}/carnaval/2027
      const content = await this.getContent();
      return content?.carnaval_2027 || null;
    } catch (error) {
      console.error('Erro ao buscar info carnaval:', error);
      return null;
    }
  },

  /**
   * Newsletter signup
   * @param {string} email
   */
  async subscribeNewsletter(email) {
    try {
      // Futura integração: POST ${API_BASE_URL}/newsletter
      console.log('Newsletter signup:', email);
      return { success: true };
    } catch (error) {
      console.error('Erro newsletter:', error);
      return { success: false };
    }
  }
};

export default ApiService;
